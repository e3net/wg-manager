export interface Peer {
  _stats: any;
  address: string;
  public_key: string;
  private_key: string;
  dns: string;
  allowed_ips: string;
  name: string;
  stats: {
    sent: string,
    received: string,
    handshake: string
  }

  _expand?: boolean;
  _edit?: boolean
}