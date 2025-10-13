import DemoWithCode from "../components/DemoWithCode";

export default function DemoTestPage() {
    return (
        <div className="min-h-screen bg-slate-900 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Prueba del Componente Demo + Código
                </h1>
                
                <div className="space-y-8">
                    {/* TaxiDay Demo + Code */}
                    <DemoWithCode 
                        videoId="gLNelfno8Yg"
                        videoTitle="TaxiDay - Plataforma de Gestión"
                        codeSnippet={`[HttpPost("login")]
public async Task<ActionResult<AuthResponse>> Login([FromBody] LoginRequest request)
{
    var taxista = await _taxistaService.AuthenticateAsync(request.Licencia, request.Password);
    if (taxista == null)
        return Unauthorized("Credenciales inválidas");
        
    var token = _jwtService.GenerateToken(taxista);
    return Ok(new AuthResponse { Token = token, Taxista = taxista });
}`}
                        codeLanguage="C#"
                        codeTitle="Autenticación de Taxistas"
                        codeDescription="Endpoint REST que autentica taxistas y genera tokens JWT"
                    />

                    {/* CAFD Demo + Code */}
                    <DemoWithCode 
                        videoId="HBuE2zCITGg"
                        videoTitle="CAFD - Rediseño Web"
                        codeSnippet={`const useFederaciones = () => {
    const [federaciones, setFederaciones] = useState<FederacionData[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/federaciones');
            setFederaciones(response.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    
    return { federaciones, loading };
};`}
                        codeLanguage="TypeScript"
                        codeTitle="Hook Personalizado React"
                        codeDescription="Hook para gestionar el estado de federaciones deportivas"
                    />
                </div>
            </div>
        </div>
    );
}
