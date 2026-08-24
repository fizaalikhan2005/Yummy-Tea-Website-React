export default function ProductCard(props) {
    return (
        <div className="pro-card">
                <div className="img-stack">
                    <img className="blob" src="img/blob.svg" alt="blob"/>
                    <img className="tea" src={props.image} alt={props.name}/>
                </div>
                <h4>{props.name}</h4>
                <div className="pro-btn">
                    {/*  Data attributes store product info for the JS popup modal */}
                    <button className="btn-outline detail-btn"
                            data-name={props.name}
                            data-img={props.image}
                            data-price={props.price}
                            data-desc={props.desc}>
                        Details
                    </button>
                    <button className="btn-solid buy-btn">Buy</button>
                </div>
        </div>
    );
}