import { useAccount } from 'wagmi'
import { ErrorInfo, Button } from '../components/ui'

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Connecting...</div>
  if (isDisconnected) return <div>Disconnected</div>

  return (
    <div>
      <h1>Home</h1>
      <div>Connected Wallet: {address}</div>
      <Button isLoading={true}>Mi Componente Boton</Button>
      <ErrorInfo message="Este es un componente para mostrar mensajes de error" />
    </div>
  )
}
