import React from "react";
import PinIcon from "../../../Icons/PinIcon";
import SearchIcon from "../../../Icons/SearchIcon";
import Button from "../../Button/Button";
import Input from "./Input";
import { StyledSearchInput } from "./style/StyledSearchInput";

function SearchInput({anime} : any) {
  return (
    <StyledSearchInput $anime={anime}>
      <form
        className={`flex lg:w-auto w-full[500px]  mx-auto items-center justify-between `}
      >
        <div className=" space-x-2 flex items-center">
          <SearchIcon className="text-white h-6 w-12" />
          <Input name="search" placeholder="Job title or Keyword" />
        </div>

        <div className="hidden md:flex ml-3 space-x-2 items-center">
          <PinIcon className="text-white h-6 w-12" />
          <Input placeholder="City or Zip code" name="zip code" />
        </div>

        <div className="hidden lg:block">
          <Button>Search</Button>
        </div>
      </form>
    </StyledSearchInput>
  );
}

export default SearchInput;
