


var listName = "combined print fiction" // best seller books in this section 
var queryURLNYT = "https://api.nytimes.com/svc/books/v3/lists/current/" + listName + ".json?api-key=E7hqgdVcY5GIbLAfpBFL6tvAVz8oV8WG";
        console.log(queryURLNYT)
      $.ajax({
        url: queryURLNYT,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            
            // console.log(response.items.0.saleInfo.buyLink);
            var randInt = Math.floor(Math.random() * 20)
            
            // console.log(response.results.books[randInt].author)

            var surprise = []
            var surpriseWine = ['Malbec', 'Cabernet Sauvignon', 'Rose', 'Pinot Noir', 'Pinot Grigio', 'Shiraz', 'Chardonnay','Zinfandel', 'Sauvigon Blanc']
            var wineIndex = Math.floor(Math.random()* 9)
            console.log(surpriseWine[wineIndex]) // randomly chooses wine type for the surpise book 


            surprise.push(response.results.books[randInt].author)
            surprise.push(response.results.books[randInt].title)
            surprise.push(response.results.books[randInt].book_image)
            surprise.push(response.results.books[randInt].description)
            surprise.push(response.results.books[randInt].amazon_product_url)
            console.log(surprise)


        });