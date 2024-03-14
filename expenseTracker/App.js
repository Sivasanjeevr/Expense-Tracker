// App.js

import Navigation from "./src/Components/Navigation";
import { AuthProvider } from "./src/Context/AuthContext";


export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};