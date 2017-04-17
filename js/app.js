var model = {
    		currentCat: null,
    		catList: [
    		{
    			title: 'Sassy',
    			caption: 'Sassy Cat',
    			imgSrc: 'cat.jpg'
    		},
    		{
    			title: 'Grumpy',
    			caption: 'Grumpy Cat',
    			imgSrc: 'grumpy-cat.jpg'
    		},
    		{
    			title: 'Cuddles',
    			caption: 'Cuddling Cats',
    			imgSrc: 'cuddles.jpg'
    		},
    		{
    			title: 'Sketchy',
    			caption: 'Sketchy Cat',
    			imgSrc: 'sketchycat.jpg'
    		},
    		{
    			title: 'Sneezing',
    			caption: 'Sneezing Cat',
    			imgSrc: 'sneezingcat.jpg'
    		}
    	]
    };
var root = document.querySelector('#selector');
        var catInfo = document.querySelector('#catinfo');

        for (var i = 0; i < model.catList.length; i++) {
            root.innerHTML += "<li data-id="+i+">"+model.catList[i].title+"</li>";
        }

        function updateCatInfo() {
            model.currentCat = model.catList[this.dataset.id];
            var catData = "<div><figcaption>"+model.currentCat.caption+"</figcaption><h3 data-count=0>Picture Clicks: 0</h3><img src=images/"+model.currentCat.imgSrc+"></div>";
            catInfo.innerHTML = catData;
            var catLink = document.querySelector('img');
            catLink.addEventListener('click', updateCounter);
        }

        function updateCounter() {
            var h3 = this.parentNode.querySelector('h3')
            count = parseInt(h3.dataset.count)
            newcount = count + 1

            h3.setAttribute('data-count', newcount)
            h3.innerHTML = "Picture Clicks: "+ newcount
        }

        var allCats = document.querySelectorAll('#selector li');

        allCats.forEach(function(cat) {
            cat.addEventListener('click', updateCatInfo)
        })
        
    var Cat = function(data) {
        this.clickCount = ko.observable(data.clickCount);
        this.name = ko.observable(data.name);
        this.imgSrc = ko.observable(data.imgSrc);
        this.nicknames = ko.observable([data.nicknames]);

        this.title = ko.computed(function() {
            var title;
            var clicks = this.cilckCount();
            if (clicks < 10) {
                title = 'Newborn';
            } else if (clicks < 50) {
                title = 'Infant';
            } else if (clicks < 100) {
                title = 'Child';
            } else if (clicks < 200) {
                title = 'Teen';
            } else if (clicks < 500) {
                title = 'Adult';
            } else if {
                title = 'Ninja';
            }
            return title;
            }
        }, this);
    }

    var ViewModel = function() {
        var self = this;

        this.catList = ko.observableArray([]);

        initialCats.forEach(function(catItem){
            self.catList.push( new Cat(catItem) );
        });

        this.currentCat = ko.observable( new Cat({
            clickCount: 0,
            name: 'Sassy',
            imgSrc: 'images/cat.jpg',
            nicknames: ['Sass', 'Sasscat', 'Sassism']
        }) );

        this.incrementCounter = function() {
            self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        };
    };

    ko.applyBindings(new ViewModel());