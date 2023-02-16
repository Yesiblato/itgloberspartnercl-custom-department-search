import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import { SearchBar } from 'vtex.store-components'
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState("");

  const CSS_HANDLES = [
    "container__principal",
    "container__departmentSearch",
    "options__department",
    "container__items"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  console.log("Mi slug Seleccionado: ", slug)
  return (
    <div className={handles.container__principal}>
      <div className={`${handles.container__departmentSearch} flex `}>
        {
          loading
          ?
          <div> Loading...</div>
          :
          <div>
          <div className={handles.container__items} >
            <DepartmentGroup
              departments={data?.categories}
              handleSetSlug={setSlug}
              />
            <SearchBar
              customSearchPageUrl={slug}
              placeholder="¿Qué deseas encontrar?"
              displayMode= "search-and-clear-buttons"
              />
          </div>

      </div>
      }

    </div>
  </div>
)
}

export default DepartmentSearch

