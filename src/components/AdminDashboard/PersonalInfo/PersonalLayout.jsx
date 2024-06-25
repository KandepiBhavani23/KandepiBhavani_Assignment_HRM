import PersonalSideBar from "./PersonalSideBar";

const PersonalLayout = ({ children }) => {
  return (
    <section className="flex w-full bg-slate-200">
      <PersonalSideBar />
      <div className="w-full">{children}</div>
    </section>
  );
};
export default PersonalLayout;
