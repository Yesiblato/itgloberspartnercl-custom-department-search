import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  const CSS_HANDLES = [
    "container__departmentGroup",
    "options__department",
    "title__department"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Category) => {
    return(
      <option
        value={department.slug}
        key={department.id}
      >
        {department.name}
      </option>
    )
  })

  return (
    <div className={handles.container__departmentGroup}>
      <select
        className={handles.title__department}
        onChange={onHandleSetSlug}
        defaultValue="value0"
      >
        <option  disabled value="value0" >Seleccione una opción</option>
        {departmentOptions}
      </select>
    </div>
  )

}

export default DepartmentGroup
