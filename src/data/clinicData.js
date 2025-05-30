export const clinicData = {
  clinicName: "VetKlinika Rīga",
  doctors: [
    {
      id: 1,
      doctorName: "Dr. Anna Kļaviņa",
      photoUrl: "/vets_profiles/vet1.jpg",
      unreadRecords: 2,
      role: "Veterinārārsts",
      specialization: "Mazie dzīvnieki"
    },
    {
      id: 2,
      doctorName: "Dr. Pēteris Ozols",
      photoUrl: "/vets_profiles/vet2.jpg",
      unreadRecords: 3,
      role: "Veterinārārsts",
      specialization: "Lieli dzīvnieki"
    }
  ]
};

// For now, we'll export the first doctor as the current profile
// Later this should come from authentication
export const clinicProfile = {
  ...clinicData.doctors[0],
  clinicName: clinicData.clinicName
}; 