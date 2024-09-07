"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Hospital, Map, SquareArrowOutUpRight, Loader2 } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface Hospital {
  type: "node";
  id: number;
  lat: number;
  lon: number;
  tags: {
    amenity: string;
    name?: string;
    "name:en"?: string;
    "name:ne"?: string;
    website?: string;
  };
}

interface City {
  name: string;
  boundingBox: string;
}

const cities: City[] = [
  { name: "Kathmandu", boundingBox: "27.6875,85.1875,27.75,85.3125" },
  { name: "Pokhara", boundingBox: "28.2,83.95,28.25,84.05" },
  { name: "Biratnagar", boundingBox: "26.45,87.25,26.5,87.3" },
  { name: "Birgunj", boundingBox: "27.0,84.85,27.05,84.9" },
  { name: "Butwal", boundingBox: "27.7,83.45,27.75,83.5" },
  { name: "Dharan", boundingBox: "26.8,87.3,26.85,87.35" },
  { name: "Hetauda", boundingBox: "27.45,85.0,27.5,85.05" },
  { name: "Itahari", boundingBox: "26.65,87.25,26.7,87.3" },
  { name: "Janakpur", boundingBox: "26.7,85.93,26.75,85.98" },
  { name: "Nepalgunj", boundingBox: "28.05,81.6,28.1,81.65" },
  { name: "Bharatpur", boundingBox: "27.65,84.45,27.7,84.5" },
  { name: "Dhangadhi", boundingBox: "28.7,80.6,28.75,80.65" },
  { name: "Mahendranagar", boundingBox: "28.95,80.15,29.0,80.2" },
  { name: "Bhadrapur", boundingBox: "26.55,88.07,26.6,88.12" },
  { name: "Tikapur", boundingBox: "28.5,81.13,28.55,81.18" },
  { name: "Gaur", boundingBox: "26.77,85.28,26.82,85.33" },
  { name: "Lahan", boundingBox: "26.72,86.48,26.77,86.53" },
  { name: "Siraha", boundingBox: "26.65,86.2,26.7,86.25" },
];

export default function HospitalsPage() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [currentCity, setCurrentCity] = useState<City>(cities[0]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedHospital, setSelectedHospital] = useState<{
    name: string;
    nameEn: string;
    lat: number;
    lon: number;
  } | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Manage drawer state

  useEffect(() => {
    const fetchHospitals = async () => {
      setLoading(true);
      const url = `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](${currentCity.boundingBox});out;`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setHospitals(data.elements); // List of hospitals from OpenStreetMap
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [currentCity]);

  const showOnMap = (
    lat: number,
    lon: number,
    name: string | undefined,
    nameEn: string | undefined
  ) => {
    setSelectedHospital({ lat, lon, name: name || "", nameEn: nameEn || "" });
    setIsDrawerOpen(true); // Open the drawer when hospital is selected
  };

  return (
    <>
      <PageTitle title="Hospitals">
        <HospitalPageMenus
          cities={cities}
          setCurrentCity={setCurrentCity}
          currentCity={currentCity}
        />
      </PageTitle>
      {loading ? (
        <div className="flex-1 grid place-content-center">
          <Loader2 className="size-10 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
          {hospitals
            .filter(
              (hospital) => hospital.tags.name || hospital.tags["name:en"]
            )
            .map((hospital) => (
              <Card key={hospital.id}>
                <CardHeader className="flex-row items-center gap-3 p-3">
                  <div className="p-3 bg-muted rounded-full">
                    <Hospital className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-medium">
                      {hospital.tags["name:en"]}
                    </CardTitle>
                    <CardTitle className="text-sm text-muted-foreground">
                      {hospital.tags.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-3 flex flex-wrap gap-2">
                  {hospital.lat && hospital.lon && (
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() =>
                        showOnMap(
                          hospital.lat,
                          hospital.lon,
                          hospital.tags.name,
                          hospital.tags["name:en"]
                        )
                      }
                    >
                      <Map className="size-3.5 shrink-0" />
                      Google Maps
                    </Button>
                  )}
                  {hospital.tags.website && (
                    <Button variant="outline" asChild>
                      <Link
                        href={hospital.tags.website}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <SquareArrowOutUpRight className="size-3.5" />
                        Visit website
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
      )}
      <MapDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedHospital={selectedHospital}
      />
    </>
  );
}

interface HospitalPageMenusProps {
  cities: City[];
  setCurrentCity: (city: City) => void;
  currentCity: City;
}

const HospitalPageMenus = ({
  cities,
  setCurrentCity,
  currentCity,
}: HospitalPageMenusProps) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <Select
        onValueChange={(value) => {
          const selectedCity = cities.find((city) => city.name === value);
          if (selectedCity) {
            setCurrentCity(selectedCity);
          }
        }}
        value={currentCity.name}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.name} value={city.name}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const MapDrawer = ({
  isOpen,
  onClose,
  selectedHospital,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedHospital: {
    lat: number;
    lon: number;
    name: string;
    nameEn: string;
  } | null;
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <p className="text-lg font-semibold">{selectedHospital?.nameEn}</p>
            <p className="text-sm text-muted-foreground">
              {selectedHospital?.name}
            </p>
          </DrawerTitle>
          <DrawerDescription>
            {selectedHospital
              ? `Latitude: ${selectedHospital.lat}, Longitude: ${selectedHospital.lon}`
              : "No location selected"}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {selectedHospital && (
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${selectedHospital.lat},${selectedHospital.lon}&output=embed`}
              allowFullScreen
            ></iframe>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
