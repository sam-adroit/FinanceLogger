export class Display {
    constructor(ul) {
        this.ul = ul;
    }
    render(title, formatter) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.textContent = title;
        li.append(h4);
        let p = document.createElement('p');
        p.textContent = formatter.format();
        li.append(p);
        this.ul.append(li);
    }
}
