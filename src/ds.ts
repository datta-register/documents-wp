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
    // Initializes the application
    static init(): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Resolve the request
            resolve();
        });
    }
}