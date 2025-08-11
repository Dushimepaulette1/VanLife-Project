import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-photos host-van-detail-outlet">
      <img src={currentVan.imageUrl} alt={`${currentVan.name} photo`} />
    </section>
  );
}
