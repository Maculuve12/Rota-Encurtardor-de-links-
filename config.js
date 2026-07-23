// Configuração do Supabase
// A "publishable key" é feita para ficar exposta no front-end — isso é normal.
// A segurança real vem das políticas de RLS configuradas na tabela (veja README.md).
const SUPABASE_URL = "https://fdrafidpbumnaabwxxuj.supabase.co";
const SUPABASE_KEY = "sb_publishable_CtroIZCbTps7GyLwwjcGIg_yUywz34";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Descobre o "diretório base" do site (necessário porque no GitHub Pages
// de projeto a URL fica tipo usuario.github.io/nome-do-repo/)
function getBasePath() {
  const path = window.location.pathname;
  const withoutFile = path.replace(/index\.html$/, "").replace(/404\.html$/, "");
  return withoutFile.replace(/\/$/, "");
}
