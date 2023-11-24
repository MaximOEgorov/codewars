
/*
For this exercise you will be strengthening your page-fu mastery.
You will complete the PaginationHelper class, which is a utility
class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer
indicating how many items will be allowed per each page. The types
of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/



class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return Number(this.collection.length)
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.itemCount()/this.itemsPerPage)
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0) {
            return -1
        }
        else if (pageIndex < this.pageCount()-1) {
            return this.itemsPerPage
        } else if (pageIndex == this.pageCount()-1) {
            return (this.itemCount()%this.itemsPerPage)
        } else {
            return -1
        }
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex > this.itemCount()) {
            return -1
        } else {
            return Math.floor( itemIndex/this.itemsPerPage )
        }
    }
}


const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

console.log(helper.pageCount())
console.log(helper.itemCount())
// doTest(helper, 'pageItemCount', 10, 1);
//doTest(helper, 'pageItemCount', 4, 2);
//doTest(helper, 'pageItemCount', -1, 3);
//doTest(helper, 'pageIndex', -1, 40);

//doTest(helper, 'pageIndex', 2, 22);
//doTest(helper, 'pageIndex', 0, 3);
//doTest(helper, 'pageIndex', 0, 0);
//doTest(helper, 'pageIndex', -1, -1);
//doTest(helper, 'pageIndex', -1, -23);
//doTest(helper, 'pageIndex', -1, -15);
