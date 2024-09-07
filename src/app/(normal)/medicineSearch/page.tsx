"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Medicine {
  name: string;
  generic_name: string;
  uses: string[];
  cautions: string[];
  side_effects: string[];
  dosage: {
    adults: string;
    children: string;
  };
  interactions: string[];
  safe_during_pregnancy: string;
  safe_for_children: string;
  child_do_not_use: boolean;
  additional_notes: string;
}

import {medicines} from "./data.json";

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filter medicines based on search term
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Search Input Change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle Selection from Dropdown
  const handleSelectMedicine = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    setSearchTerm(''); // Clear search bar after selection
  };

  const handleLearnMoreClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    setIsDrawerOpen(true);
  };

  return (
    <div className="medicine-search-container mt-12">
      <h2 className="text-2xl font-bold mb-4">Search Medicines</h2>
      <div className="search-bar mb-4">
        <Input
          type="text"
          placeholder="Search for medicine..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="search-results mt-4">
        <h3 className="text-xl font-semibold mb-4">Search Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.name}>
              <CardHeader>
                <CardTitle>{medicine.name}</CardTitle>
                <CardDescription>{medicine.uses.join(', ')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{medicine.dosage.adults}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => handleLearnMoreClick(medicine)}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedMedicine && (
        <MedicineDetailDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          medicine={selectedMedicine}
        />
      )}
    </div>
  );
};

const MedicineDetailDrawer = ({
  isOpen,
  onClose,
  medicine,
}: {
  isOpen: boolean;
  onClose: () => void;
  medicine: Medicine;
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{medicine.name}</DrawerTitle>
          <DrawerDescription>{medicine.generic_name}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p><strong>Uses:</strong></p>
          <ul>
            {medicine.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
          <p><strong>Cautions:</strong></p>
          <ul>
            {medicine.cautions.map((caution, index) => (
              <li key={index}>{caution}</li>
            ))}
          </ul>
          <p><strong>Side Effects:</strong></p>
          <ul>
            {medicine.side_effects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
          <p><strong>Dosage:</strong></p>
          <ul>
            <li><strong>Adults:</strong> {medicine.dosage.adults}</li>
            <li><strong>Children:</strong> {medicine.dosage.children}</li>
          </ul>
          <p><strong>Interactions:</strong></p>
          <ul>
            {medicine.interactions.map((interaction, index) => (
              <li key={index}>{interaction}</li>
            ))}
          </ul>
          <p><strong>Safe During Pregnancy:</strong> {medicine.safe_during_pregnancy}</p>
          <p><strong>Safe for Children:</strong> {medicine.safe_for_children}</p>
          {medicine.child_do_not_use && <p><strong>Do Not Use for Children:</strong> Yes</p>}
          <p><strong>Additional Notes:</strong> {medicine.additional_notes}</p>
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

export default MedicineSearch;