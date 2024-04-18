import style from "./Home.module.css"
export default function Home() {
  return (
    <section className={style.home}>
    <div className={style.nav}>
      <p className={style.CelShop}>TechXcell</p>
      <p className={style.nav_item}>About us</p>
      <p className={style.nav_item}>Catalogue</p>
      <a className={style.nav_item} href="#contact">Contact us</a>
    </div>
    <div className={style.home_area}>
      <div className={style.home_text}>
        <p className={style.home_title}>TechXcell</p>
        <p className={style.home_subtitle}>best products at the best price</p>
      </div>
    </div>
  </section>
  )
}
