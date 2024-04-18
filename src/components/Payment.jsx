import style from "Payment.module.css"

export default function Payment() {
  return (
    <section className={style.section_payment} id="payment">
    <div className={style.card_payment}>
      <div className={style.card_front}>
        <div className={style.card_front_number}>0000 0000 0000 0000</div>
        <div className={style.card_front_info}>
          <div className={style.card_front_name}>Jane Appleseed</div>
          <div className={style.card_front_expired}>00/00</div>
        </div>
      </div>
      <div className={style.card_back}>
        <div className={style.card_back_sec}>000</div>
      </div>
    </div>
    <div className={style.form_payment}>
      <div className={style.form_group}>
        <label htmlFor="">Cardholder Name</label>
        <input type="text" placeholder="e.g. Jane Appleseed" className={style.input_payment} />
      </div>
      <div className={style.form_group}>
        <label htmlFor="">Card Number</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" className={style.input_payment} />
      </div>
      <div className={style.form_group_extra}>
        <div className={style.input_expired_month}>
          <label htmlFor="">Exp. Date (MM/YY)</label>
          <div className={style.inputs}>
            <input type="text" className={style.input_payment} placeholder="MM" />
            <input type="text" className={style.input_payment} placeholder="YY" />
          </div>
        </div>
        <div className={style.input_cvc}>
          <label htmlFor="">CVC</label>
          <div className={style.input_expired_cvc}>
            <input type="text" placeholder="e.g. 123" className={style.input_payment} />
          </div>
        </div>
      </div>
      <div className={style.form_group}>
        <button className={style.button_form_payment}>Confirm</button>
      </div>
    </div>
  </section>
  )
}
