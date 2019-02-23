function Carousel(container_class) {
    this.container      = document.querySelector(container_class);
    this.animate        = this.container.classList.contains("animated_carousel");
    this.direction      = true; // true == right, false == left
    this.paused         = false;

    this.slide_time     = 5000;
    this.pause_time     = 10000;

    this.items          = this.container.querySelectorAll(".carousel_item");
    this.itemWidth      = this.calculateTotalWidth(this.items[0]);
    
    this.total          = this.items.length - 1;
    this.current        = Math.round(this.total / 2);
    this.margin         = 0;

    if(this.items.length % 2 == 0)
        this.setMargin(this.itemWidth);

    this.setCenter();

    if(this.animate)
        this.slide(this);
};



Carousel.prototype.slide = function(object_context) {
    setInterval(function() {
        if(object_context.paused)
            return;

        if(object_context.direction) 
            object_context.next();
        else 
            object_context.prev();
    }, this.slide_time);
};



Carousel.prototype.pause = function() {
    if(this.paused) return;

    this.paused = true;

    let object_context = this;
    setTimeout(function() {
        object_context.paused = false;
    }, this.pause_time);
}



// Go right
Carousel.prototype.next = function() {
    if(this.current + 1 > this.total) {
        this.direction = !this.direction;
        return;
    }

    this.current++;

    this.changeCurrent(this.items[this.current]);
    this.setMargin(this.itemWidth * 2);

    this.container.dispatchEvent(new CustomEvent("carousel-move", {
        detail: {
            direction: "right"
        }
    }));
};


// Go left
Carousel.prototype.prev = function() {
    if(this.current - 1 < 0) {
        this.direction = !this.direction;
        return;
    }

    this.current--;

    this.changeCurrent(this.items[this.current]);
    this.setMargin(-this.itemWidth * 2);

    this.container.dispatchEvent(new CustomEvent("carousel-move", {
        detail: {
            direction: "left"
        }
    }));
}




Carousel.prototype.setCenter = function() {
    let center          = window.innerWidth / 2;
    let object_context  = this;

    this.items.forEach(function(item, index) {
        let position = item.offsetLeft;

        if(position <= center + 100 && position >= center - 100) {
            object_context.changeCurrent(item);
            object_context.current = index;
        }
    });
};



Carousel.prototype.changeCurrent = function(new_element) {
    document.querySelector(".current").classList.remove("current");
    new_element.classList.add("current");
};



Carousel.prototype.setMargin = function(margin) {
    this.margin += margin;
    this.container.style.marginRight = this.margin + "px";
};



Carousel.prototype.calculateTotalWidth = function(element) {
    let styles          = window.getComputedStyle(element, null);
    let total_width     = 0;

    total_width += parseInt(styles.marginLeft.replace("px", "")) * 2;
    total_width += parseInt(styles.paddingLeft.replace("px", "")) * 2;
    total_width += parseInt(styles.borderLeftWidth.replace("px", "")) * 2;
    total_width += parseInt(styles.width.replace("px", ""));

    return total_width;
};




try {
    var carousel = new Carousel(".carousel_container");
} catch(err) {
    // No element with the required ID was found.
    // No big deal.
}



/**
 * 
 *  From this point on jQuery is required
 *  -   jquery
 *  -   jquery-touch-events
 * 
 */
$(document).on("keyup", function(e) { 
    if($("input").is(":focus")) return;

    carousel.pause();

    let key = e.which;
    if(key == 39) // Right
        carousel.next();
    if(key == 37) // Left
        carousel.prev();
});

$(".carousel_container").on("swipe", function(e, swipe) {
    carousel.pause();

    let direction = swipe.direction;
    if(direction == "right")
        carousel.prev();
    if(direction == "left")
        carousel.next();
});

$(".carousel_item").on("click", function() {
    if($("input").is(":focus")) return;
    
    carousel.pause();

    let position = $(this).offset();
    let center = window.innerWidth / 2;
    if(position.left < center)
        carousel.prev();
    else
        carousel.next();
});