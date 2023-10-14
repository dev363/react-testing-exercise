import { render, screen } from "@testing-library/react";
import { Skills } from "./Skill";

describe("Skills", () => {
  const SkillsList = ["HTML", "ReactJs", "NodeJs"];
  test("render correctly", () => {
    render(<Skills skills={SkillsList} />);
    const isList = screen.getByRole("list");
    expect(isList).toBeInTheDocument();
  });
  test("render a length of list", () => {
    render(<Skills skills={SkillsList} />);
    const isList = screen.getAllByRole("listitem");
    expect(isList).toHaveLength(3);
    expect(isList.length).toEqual(SkillsList.length);
  });

  describe("Button", () => {
    test("login Button render", () => {
      render(<Skills skills={SkillsList} />);
      const isButton = screen.getByRole("button", {
        name: "Login",
      });
      expect(isButton).toBeInTheDocument();
    });

    test("Start Leaning not render queryBy", () => {
      render(<Skills skills={SkillsList} />);
      const isButton = screen.queryByRole("button", {
        name: "Start learning",
      });
      expect(isButton).not.toBeInTheDocument();
    });

    test("Start Leaning not render findBy", async () => {
      render(<Skills skills={SkillsList} />);
      // screen.debug()
      //   logRoles(view.container);
      const isButton = await screen.findByRole(
        "button",
        {
          name: "Start learning",
        },
        {
          timeout: 2000, // by Default 1000
        },
      );

      expect(isButton).toBeInTheDocument();
    });
  });
});
