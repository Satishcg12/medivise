import AddDoctorForm from "./AddDoctorForm"
import DoctorTable from "./DoctorTable"

function Doctor() {
  return (
    <div className="grid gap-4 xl:grid-cols-2 xl:gap-8">
    <div className="grid auto-rows-max gap-4 xl:gap-8">
      <DoctorTable />
    </div>
    <div className="grid auto-rows-max gap-4 xl:gap-8">
      <AddDoctorForm />
    </div>
  </div>
  )
}

export default Doctor