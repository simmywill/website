import { getUserInfo } from "../localStorage";

const Header = {
    render: () =>{
        const {name} = getUserInfo();
        return `
        <div class = "brand">
            <a href = "/#/">DANIEL TENIA'S HARDWARE STORE</a>
        </div>
        <div>
        ${name ? `<a href = "/#/profile">${name}</a>`
        :`<a href = "/#/signin">Sign-In</a>`}
            
             <a href="/#/cart">Cart</a>
        </div> `
    },

    after_render: () => {},
};
export default Header;