import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { PageWrapper } from "../components/PageWrapper";

export function NotAuthorizedPage() {
  const navigate = useNavigate();
  return (
    <PageWrapper title="Not logged in">
      <div>You are not logged in. Please log in to view the content.</div>
      <Button onClick={() => navigate("/login")}>Go to Login</Button>
    </PageWrapper>
  )
}
