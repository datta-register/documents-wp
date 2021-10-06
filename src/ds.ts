import { Components, List, Types } from "gd-sprest-bs";
import Strings from "./strings";

// Item
export interface IItem extends Types.SP.FileOData {
    ListItemAllFields: Types.SP.ListItem & Types.SP.ListItemCollections & Types.SP.ListItemCollectionMethods & {
    }
}

/**
 * Data Source
 */
export class DataSource {
    // Gets the item id from the query string
    static getItemIdFromQS() {
        // Get the id from the querystring
        let qs = document.location.search.split('?');
        qs = qs.length > 1 ? qs[1].split('&') : [];
        for (let i = 0; i < qs.length; i++) {
            let qsItem = qs[i].split('=');
            let key = qsItem[0];
            let value = qsItem[1];

            // See if this is the "id" key
            if (key == "ID") {
                // Return the item
                return parseInt(value);
            }
        }
    }

    // Initializes the application
    static init(): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Resolve the request
            resolve();
        });
    }
}