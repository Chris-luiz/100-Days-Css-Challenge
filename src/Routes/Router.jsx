import { Routes, Route } from "react-router-dom"

import { BaseLayout } from '../shared/layout/BaseLayout/BaseLayout';
import {
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day7,
  Day9,
  Day10,
  Day15,
  Day18,
  // Day21,
  // Day31,
  // Day32,
  // Day33,
  // Day34,
  // Day36,
  // Day40,
  // Day41,
  // Day45,
  // Day65,
  // Day66,
  // Day69,
  // Day70,
  // Day72,
  // Day73,
  // Day74,
  // Day80,
  // Day83,
  // Day88,
  // Day89,
  // Day92,
  // Day95,
  // Day96,
} from '../pages';

export const Router = () => {
  return (

    <Routes>
      <Route path={'dia1'} element={<Day1 />} />
      <Route path={'dia2'} element={<Day2 />} />
      <Route path={'dia3'} element={<Day3 />} />
      <Route path={'dia4'} element={<Day4 />} />
      <Route path={'dia5'} element={<Day5 />} />
      <Route path={'dia6'} element={<Day6 />} />
      <Route path={'dia7'} element={<Day7 />} />
      <Route path={'dia9'} element={<Day9 />} />
      <Route path={'dia10'} element={<Day10 />} />
      <Route path={'dia15'} element={<Day15 />} />
      <Route path={'dia18'} element={<Day18 />} />

      {/* 
      <Route path={'dia21'} element={<Day21 />} />
      <Route path={'dia31'} element={<Day31 />} />
      <Route path={'dia32'} element={<Day32 />} />
      <Route path={'dia33'} element={<Day33 />} />
      <Route path={'dia34'} element={<Day34 />} />
      <Route path={'dia36'} element={<Day36 />} />
      <Route path={'dia40'} element={<Day40 />} />
      <Route path={'dia41'} element={<Day41 />} />
      <Route path={'dia45'} element={<Day45 />} />
      <Route path={'dia65'} element={<Day65 />} />
      <Route path={'dia66'} element={<Day66 />} />
      <Route path={'dia69'} element={<Day69 />} />
      <Route path={'dia70'} element={<Day70 />} />
      <Route path={'dia72'} element={<Day72 />} />
      <Route path={'dia73'} element={<Day73 />} />
      <Route path={'dia74'} element={<Day74 />} />
      <Route path={'dia80'} element={<Day80 />} />
      <Route path={'dia83'} element={<Day83 />} />
      <Route path={'dia88'} element={<Day88 />} />
      <Route path={'dia89'} element={<Day89 />} />
      <Route path={'dia92'} element={<Day92 />} />
      <Route path={'dia95'} element={<Day95 />} />
      <Route path={'dia96'} element={<Day96 />} /> */}
    </Routes>

  )
}