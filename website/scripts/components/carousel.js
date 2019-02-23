function Carousel(container_id, animate = false) {
    // TODO: Check for a second class so you know if you should have automatic slides
    this.container  = document.getElementById(container_id);
    
    this.items      = this.container.querySelectorAll(".form_avatar"); //TODO: Change
    this.itemWidth  = this.calculateTotalWidth(this.items[0]);
    
    this.total      = this.items.length - 1;
    this.current    = Math.round(this.total / 2);
    this.margin     = 0;

    if(this.items.length % 2 == 0) {
        this.setMargin(this.itemWidth);
    }

    this.setCenter();
};



// Go right
Carousel.prototype.next = function() {
    if(this.current + 1 > this.total) {
        console.log("END");
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
        console.log("START");
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
    let center = window.innerWidth / 2;

    this.items.forEach(function(item, index) {
        let position = item.offsetLeft;

        if(position <= center + 100 && position >= center - 100) {
            document.querySelector(".current").classList.remove("current");
            item.classList.add("current");
            this.current = index;
        }
    });
};



Carousel.prototype.changeCurrent = function(new_element) {
    document.querySelector(".current").classList.remove("current");
    new_element.classList.add("current");
};



Carousel.prototype.setMargin = function(margin) {
    console.log("Setting margin " + margin);
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
    var carousel = new Carousel("carousel_container");
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

// Move the events inside an init function or something
$(document).on("keyup", function(e) { 
    if($("input").is(":focus")) return;

    let key = e.which;
    if(key == 39) // Right
        carousel.next();
    if(key == 37) // Left
        carousel.prev();
});

$("#carousel_container").on("swipe", function(e, swipe) {
    let direction = swipe.direction;
    if(direction == "right")
        carousel.prev();
    if(direction == "left")
        carousel.next();
});

$(".carousel_item").on("click", function() {
    if($("input").is(":focus")) return;
    console.log("In here");
    let position    = $(this).offset();
    let center      = window.innerWidth / 2;
    if(position.left < center)
        carousel.prev();
    else
        carousel.next();
});