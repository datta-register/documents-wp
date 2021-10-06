import { Documents, FilterSlideout, getFileExt } from "dattatable";
import { Components } from "gd-sprest-bs";
import { DataSource } from "./ds";
import Strings from "./strings";

/**
 * Main Application
 */
export class App {
    private _docs: Documents = null;
    private _filters: FilterSlideout = null;

    // Constructor
    constructor(el: HTMLElement) {
        // Initialize the application
        DataSource.init().then(() => {
            // Render the documents
            this._docs = new Documents({
                el,
                listName: Strings.Lists.Documents,
                enableSearch: true,
                onFilterRendered: el => {
                    // Update the class
                    el.classList.add("ms-2");
                },
                onShowFilter: () => {
                    this._filters.show();
                },
                onRendered: () => {
                    // Generate the filters
                    this.generateFilters();
                }
            });
        });
    }

    // Generates the filters
    private generateFilters() {
        // Parse the files
        let extensions = {};
        for (let i = 0; i < this._docs.Files.length; i++) {
            // Get the file extension
            let ext = getFileExt(this._docs.Files[i].Name);
            if (ext && extensions[ext] == null) {
                // Set the extension
                extensions[ext] = ext;
            }
        }

        // Parse the extensions
        let items: Components.ICheckboxGroupItem[] = [];
        for (let ext in extensions) {
            // Add the item
            items.push({
                label: ext,
                type: Components.CheckboxGroupTypes.Switch
            });
        }

        // Render the filters
        this._filters = new FilterSlideout({
            filters: [{
                header: "By Type",
                items: items.sort((a, b) => {
                    if (a.label < b.label) { return -1; }
                    if (a.label > b.label) { return 1; }
                    return 0;
                }),
                onFilter: (value: string) => {
                    this._docs.DataTable.filter(0, value)
                }
            }]
        });
    }
}