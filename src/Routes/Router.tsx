import { Routes, Route } from "react-router-dom"

import { BaseLayout } from '../shared/layout/BaseLayout/BaseLayout';
import {
  Day1, Day3, Day4, Day5, Day6, Day7, Day9, Day10,
  Day15, Day18, Day21, Day31, Day32, Day33, Day34, Day35, Day36, Day40, Day41, Day43, Day44, Day45, Day55, Day62, Day61, Day64, Day65, Day66, Day68, Day69, Day70,
  Day72, Day73, Day74, Day76, Day78, Day80, Day82, Day86, Day88, Day92, Day94, Day95, Day96, Day99, InDevelopment
} from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path={'dia1'} element={<Day1 />} />
      <Route path={'dia3'} element={<Day3 />} />
      <Route path={'dia4'} element={<Day4 />} />
      <Route path={'dia5'} element={<Day5 />} />
      <Route path={'dia6'} element={<Day6 />} />
      <Route path={'dia7'} element={<Day7 />} />
      <Route path={'dia9'} element={<Day9 />} />
      <Route path={'dia10'} element={<Day10 />} />
      <Route path={'dia15'} element={<Day15 />} />
      <Route path={'dia18'} element={<Day18 />} />
      <Route path={'dia21'} element={<Day21 />} />
      <Route path={'dia31'} element={<Day31 />} />
      <Route path={'dia32'} element={<Day32 />} />
      <Route path={'dia33'} element={<Day33 />} />
      <Route path={'dia34'} element={<Day34 />} />
      <Route path={'dia35'} element={<Day35 />} />
      <Route path={'dia36'} element={<Day36 />} />
      <Route path={'dia40'} element={<Day40 />} />
      <Route path={'dia41'} element={<Day41 />} />
      <Route path={'dia43'} element={<Day43 />} />
      <Route path={'dia44'} element={<Day44 />} />
      <Route path={'dia45'} element={<Day45 />} />
      <Route path={'dia55'} element={<Day55 />} />
      <Route path={'dia61'} element={<Day61 />} />
      <Route path={'dia62'} element={<Day62 />} />
      <Route path={'dia64'} element={<Day64 />} />
      <Route path={'dia65'} element={<Day65 />} />
      <Route path={'dia66'} element={<Day66 />} />
      <Route path={'dia68'} element={<Day68 />} />
      <Route path={'dia69'} element={<Day69 />} />
      <Route path={'dia70'} element={<Day70 />} />
      <Route path={'dia72'} element={<Day72 />} />
      <Route path={'dia73'} element={<Day73 />} />
      <Route path={'dia74'} element={<Day74 />} />
      <Route path={'dia76'} element={<Day76 />} />
      <Route path={'dia78'} element={<Day78 />} />
      <Route path={'dia80'} element={<Day80 />} />
      <Route path={'dia82'} element={<Day82 />} />
      <Route path={'dia86'} element={<Day86 />} />
      <Route path={'dia88'} element={<Day88 />} />
      <Route path={'dia92'} element={<Day92 />} />
      <Route path={'dia94'} element={<Day94 />} />
      <Route path={'dia95'} element={<Day95 />} />
      <Route path={'dia96'} element={<Day96 />} />
      <Route path={'dia99'} element={<Day99 />} />
      <Route path={'*'} element={<InDevelopment />} />
    </Routes>

  )
}