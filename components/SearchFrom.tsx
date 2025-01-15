import React from "react";
import Form from "next/form"; // Replace "some-library" with the actual library name
import {Search} from "lucide-react"; // Replace "some-library" with the actual library name or file path
import SearchFormReset from "@/components/SearchFormReset";

const SearchFrom = ({query}:{
  query?: string
}) => {

  return(
    <Form action="/"scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {
          query && <SearchFormReset />
        }
        <button type="submit" className="search-btn text-white">
          <Search className="size-5"/>
        </button>
      </div>
    </Form>
  )
}

export default SearchFrom;