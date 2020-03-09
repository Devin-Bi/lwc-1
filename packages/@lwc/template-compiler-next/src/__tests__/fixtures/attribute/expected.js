function create_fragment(context) {
    let div;
    return {
        create() {
            div = createElement("div");
            setAttribute(div, "class", "foo bar");
            setAttribute(div, "style", "color: red;");
        },
        insert(target) {
            insert(div, target);
        },
        update() {
            
        }
    }
}