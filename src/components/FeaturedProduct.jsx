import style from "./FeaturedProduct.module.css"
export default function FeaturedProduct() {
  return (
    <section className={style.product}>
      <div className={style.product_area}>
        <p className="title">Most popular</p>
        <div className={style.box_phone}>
          <div className={style.box_phone_img}>
            <div className={style.phone_img}>
              <img src="/public/img/D_NQ_NP_768125-MLA71783090116_092023-O.webp" alt="" />
            </div>
            <div className={style.box_phone_gallery}>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_650610-MLA71782873190_092023-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_667438-MLU75181711614_032024-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_674917-MLA71783090126_092023-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_690178-MLA71783367420_092023-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_756180-MLU75181711598_032024-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_768125-MLA71783090116_092023-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_775038-MLA71782873194_092023-O.webp" alt="" />
              </div>
              <div className={style.gallery_card}>
                <img src="/public/img/D_NQ_NP_861034-MLA71783367422_092023-O.webp" alt="" />
              </div>
            </div>
          </div>
          <div className={style.box_description}>
            <p className={style.box_description_name}>
              Apple iPhone 15 Pro Max (256 GB) - Titanio Black
            </p>
            <p className={style.box_description_price}>1.713</p>
            <ul className={style.box_description_list}>
              <h2>What you need to know about this product</h2>
              <li>RAM memory: 8GB</li>
              <li>Durable and lightweight design.</li>
              <li>
                Super Retina XDR display with ProMotion with up to 120Hz refresh
                rate
              </li>
              <li>Dynamic Island shows live alerts and activities instantly</li>
              <li>Super high resolution pro camera system</li>
              <li>
                Customizable action button to go to your favorite functionality
              </li>
              <li>With USB-C connector and WiFi 6 with double speed</li>
              <li>
                Essential safety functionality with crash detection to call for
                help.
              </li>
              <li>
                With privacy technologies that help you maintain control of your
                data
              </li>
            </ul>
            <button className={style.btn_buy}>Buy</button>
          </div>
        </div>
      </div>
    </section>
  )
}
