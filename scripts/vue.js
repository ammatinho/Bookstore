const app = new Vue({
    el: "#app",
    data: {
        books: [],
        searchQuery: "",
        apiUrl: "https://api.myjson.com/bins/zyv02",
    },

    created() {
        this.fetchData(this.apiUrl)
            .then(() => console.log('called before', this.books))
    },

    methods: {

        async fetchData(apiUrl) {
            // let apiUrl = this.apiUrl;
            this.books = await fetch(apiUrl, {
                    method: "GET",
                    dataType: "jsonp",
                })
                .then(data => data.json())
                .then(data => data.books)
                .catch(error => console.log(error))
            // books = await (books)
            // await (executeAfterFetch())
        }

    },

    computed: {
        
        filterSearch() {
            return this.books.filter( book => {
              console.log(book.title, this.searchQuery)
              return !this.searchQuery || book.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
            })
}
    }



})




// let apiUrl = "https://api.myjson.com/bins/zyv02";

// let books;

// async function fetchData(url) {

//     books = await fetch(url, {
//             method: "GET",
//             dataType: "jsonp",
//         })
//         .then(data => data.json())
//         .then(data => data.books)
//         .catch(error => console.log(error))
//     books = await (books)
//     // await (executeAfterFetch())
// }


// fetchData(apiUrl)
//     .then(()=> console.log('called before',books))

// // console.log('calles after', books)



//v-for book in books