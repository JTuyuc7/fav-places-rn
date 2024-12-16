// import AllPlacesScreen from "@/screens/AllPlacesScreen"
import { Text, View, Button } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import PlacesList from "@/components/places/PlacesList"
import { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"
import { PlaceProps } from "@/models/place"
import { fetchPlaces } from "@/components/Utils/DB"

interface AllPlacesScreenProps {
  route: any
}

export default function AllPlacesScreen() {
  const [places, setPlaces] = useState<PlaceProps[]>([])
  const isFoucused = useIsFocused()
  useEffect(() => {
    async function fetchAllPlaces() {
      if (isFoucused) {
        const places: PlaceProps[] = await fetchPlaces()
        // const parsedPlace = JSON.parse(place as string) as PlaceProps;
        setPlaces((prev: PlaceProps[]) => [...prev, ...places])
      }
    }
    fetchAllPlaces()
  }, [isFoucused])

  return (
    <>
      <PlacesList places={places} />
    </>
  )
}
