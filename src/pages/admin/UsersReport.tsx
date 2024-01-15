import {
    AllUsersTable,
    ScreenTitle,
  } from "../../components"
  
  const WorkingHoursReport = () => {
    return (
      <div>
        <ScreenTitle title="Relatório de usuários" />
        <hr className="border-t-2" />
        <h5 className="my-1 text-sm text-gray-600 md:my-3 md:text-[20px] ">
          Você está na área administrativa, focada no gerenciamento dos colaboradores.
        </h5>
        <div className="flex flex-wrap gap-4 md:gap-16">
          <div className="">
            <AllUsersTable defaultPerPage={12} pagination />
          </div>
        </div>
      </div>
    )
  }
  
  export default WorkingHoursReport
  