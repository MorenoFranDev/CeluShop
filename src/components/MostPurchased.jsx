import style from "./MostPurchased.module.css"
export default function MostPurchased() {
  return (
    <section className={style.catalogue}>
      <div className={style.catalogue_area}>
        <p className="title">Products in stock</p>
        <div className={style.product_catalogue}>
          <div className={style.product_card}>
            <img src="/img/12pro.webp" alt="" />
            <p className={style.card_name}>Iphone 12 Pro</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/13pro.webp" alt="" />
            <p className={style.card_name}>Iphone 13 Pro</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/14pro.webp" alt="" />
            <p className={style.card_name}>Iphone 14 Pro</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/iphone11.webp" alt="11" />
            <p className={style.card_name}>Iphone 11</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/iphone13.webp" alt="" />
            <p className={style.card_name}>Iphone 13</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/iphone14.webp" alt="" />
            <p className={style.card_name}>Iphone 14</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/iphone15.webp" alt="" />
            <p className={style.card_name}>Iphone 15</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>

          <div className={style.product_card}>
            <img src="/img/iphoneXR.webp" alt="" />
            <p className={style.card_name}>Iphone XR</p>
            <div className={style.card_text}>
              <p className={style.card_text_name}>Iphone 12 Pro</p>
              <p className={style.card_text_p}>Precio: 200</p>
              <p className={style.card_text_p}>Lanzamiento: 13/9/2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
