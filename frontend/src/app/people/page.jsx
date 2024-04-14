import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Placeholder from "@/assets/placeholder.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Language";

export default function People() {
  const people = [
    {
      name: "Milo Baumhardt",
      linkedin: "",
      github: "https://github.com/milorb",
      website: "",
    },
    {
      name: "Téa Hajratwala",
      linkedin: "https://www.linkedin.com/in/teahaj/",
      github: "https://github.com/teahaj",
      website: "https://teahaj.github.io/",
    },
    {
      name: "Arnav Reddy",
      linkedin: "https://www.linkedin.com/in/arnavreddy123",
      github: "https://github.com/ArnavReddy",
      website: "",
    },
    {
      name: "Nicholas Way",
      linkedin: "https://www.linkedin.com/in/nicholas-way/",
      github: "https://github.com/niemway",
      website: "https://eggshelld.itch.io/",
    },
    {
      name: "Noah Peters",
      linkedin: "https://www.linkedin.com/in/noah-f-peters/",
      github: "https://github.com/noahpete",
      website: "https://www.noahpeters.io/",
    },
  ];

  return (
    <main className="min-h-screen pt-32 mx-auto">
      <Grid
        container
        justifyContent="center"
        spacing={2}
        columns={{ xs: 1, sm: 3 }}
        className="mx-auto max-w-[900px]"
      >
        {people.map((person, index) => (
          <Grid item key={index}>
            <div className="bg-white w-64 mx-auto p-4 m-4">
              <Image
                className="w-64 mx-auto"
                src={Placeholder}
                alt={`${person.name} image`}
              />
              <div>
                <h2 className="text-2xl text-center">{person.name}</h2>
                <div className="w-fit mx-auto">
                  {person.linkedin && (
                    <Link
                      className="mx-1"
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </Link>
                  )}
                  {person.github && (
                    <Link
                      className="mx-1"
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </Link>
                  )}
                  {person.website && (
                    <Link
                      className="mx-1"
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WebIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
