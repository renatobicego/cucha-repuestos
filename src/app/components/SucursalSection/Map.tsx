import { GoogleMapsEmbed } from "@next/third-parties/google";

type MapProps = {
  location: {
    lat: number;
    lng: number;
    address: string;
  };
};

const Map = ({ location }: MapProps) => {
  return (
    <GoogleMapsEmbed
      style='width:100%;height:100%'
      apiKey={process.env.NEXT_PUBLIC_MAPS_APIKEY as string}
      mode="place"
      q={location.address}
      center={location.lat + ", " + location.lng}
    />
  );
};

export default Map;
