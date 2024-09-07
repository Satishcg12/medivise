import UserTable from "./UserTable"

function User() {
  return (
    <div className="grid gap-4 xl:grid-cols-2 xl:gap-8">
    <div className="grid auto-rows-max gap-4 xl:gap-8">
      <UserTable />
    </div>
    <div className="grid auto-rows-max gap-4 xl:gap-8">
    </div>
  </div>
  )
}

export default User