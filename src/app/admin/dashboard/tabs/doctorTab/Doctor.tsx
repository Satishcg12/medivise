import AddDoctorForm from "./AddDoctorForm"

function Doctor() {
  return (
    <div className="grid gap-4 xl:grid-cols-2 xl:gap-8">
    <div className="grid auto-rows-max gap-4 xl:col-span-2 xl:gap-8">
      
    </div>
    <div className="grid auto-rows-max gap-4 xl:gap-8">
      <AddDoctorForm />
    </div>
  </div>
  )
}

export default Doctor