import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-pricing host-van-detail-outlet">
      <h3>
        <span className="price-amount">${currentVan.price}</span>
        <span className="price-period">/day</span>
      </h3>
      <p>Current pricing for your van rental</p>
    </section>
  );
}
