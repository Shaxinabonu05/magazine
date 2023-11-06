import "./Header.css";

function Header() {
    return (
 <div className="header">
 <img src="https://muallimlar.uz/images/posts/1693841317_photo_2023-09-04_18-42-32.jpg" alt="" />
<ul>
    <li>tashkilot</li>
    <li>imkoniyat</li>
    <li>hamkorlarga</li>
    <li>yordam</li>
</ul>
<select>
<option value="" key="">eng</option>
<option value="" key="">rus</option>
</select>
<button className="kirish">Kirish</button>
<button>tashkilot ulash</button>
 </div>

    ) 
        
        
    }
export default Header;