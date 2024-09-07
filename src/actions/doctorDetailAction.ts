"use server"

export async function addDoctorDetail(formData :FormData) {
    try {
        const response = await fetch("/api/doctorDetail", {
        method: "POST",
        body: formData,
        });
        return await response.json();
    } catch (error) {
        console.error("Error in addDoctorDetail:", error);
    }
  
}
