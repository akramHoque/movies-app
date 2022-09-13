import styled from "styled-components"


export default function SelectGenre({genres, type}) {
    console.log(genres);
return (
    <Select>
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
`