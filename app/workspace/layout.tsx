import WorkspaceProvider from "./provider";

const WorksapceLayout = ({ children }: { children: React.ReactNode }) => {
  return <WorkspaceProvider>{children}</WorkspaceProvider>;
};

export default WorksapceLayout;