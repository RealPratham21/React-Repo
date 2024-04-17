import style from "./Contacts.module.css";
function Contacts(){
    return(
        <>
            <div className={style.parent}>
                <div className={style.box}>
                    <div className={style.heading}>Contact Us</div>
                    <div className={style.name_box}>
                        <div><b>Name: </b></div>
                        <input type="text" className={style.name} />
                    </div>
                    <div className={style.email_zone}>
                        <div><b>Email: </b></div>
                        <input type="email" className={style.email}/>
                    </div>
                    <div className={style.message_zone}>
                        <div><b>Message: </b></div>
                        <textarea className={style.message} />
                    </div>
                    <div className={style.btn_zone}>
                        <button className={style.submit}>Submit</button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Contacts;