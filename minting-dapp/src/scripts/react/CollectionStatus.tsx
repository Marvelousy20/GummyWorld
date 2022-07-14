import React from 'react';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut;
  }

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address mb-2">
            <div className="text-sm">Wallet address:</div>
            <span className="font-bold">{this.props.userAddress}</span>
          </div>
          
          <div className="supply mb-2">
            <div className="text-sm">Supply:</div>
            <span className='font-bold'>{this.props.totalSupply}/{this.props.maxSupply}</span>
          </div>

          <div className="current-sale mb-2">
            <div className="text-sm">Sale status:</div>
            {this.isSaleOpen() ?
              <span className= 'font-bold'>
                {this.props.isWhitelistMintEnabled ? 'Whitelist only' : 'Open'}
              </span>
              :
              'Closed'
            }
          </div>
        </div>
      </>
    );
  }
}
