import { Component, ReactNode } from "react";
import * as htmlToImage from 'html-to-image';
import { image } from "ionicons/icons";

declare global {
    interface Window {
        htmlToImage: any;
    }
};

const Barcode = require('react-barcode');

type IProps = {
    onLoad?: ()=>any;
    generate?: boolean;
};
type IState = {
    images: number;
    reset: boolean;
};

export class GenerateCredential extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            images: 0,
            reset: false
        };
        window.htmlToImage = htmlToImage;
    }
    componentDidUpdate() {
        if (this.props.generate) {
            if (this.state.images == 2) {
                
            }
            this.setState({ reset: false });
        } else if (!this.state.reset) {
            this.setState({
                images: (this.badgeLoad)? 1: 0,
                reset: true
            });
        }
    }
    private badgeLoad: boolean = false;
    render(): ReactNode {
        return(<div style={{ position: 'absolute', left: -100000, top: -100000 }}>
            <div id="credential-content" style={{ width: 1200, height: 799, background: '#FFFFFF' }}>
                <div style={{ position: 'absolute', top: 80, left: 60, width: 300, height: 300, border: '10px solid #FF2E2E', borderRadius: 20, overflow: 'hidden' }}>
                    <img onLoad={()=>this.setState({ images: this.state.images + 1 })} src="assets/peppa.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h2 style={{ fontSize: 64, height: 160, width: 764, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: '#000000', position: 'absolute', top: 80, left: 420 }}>Nombre del alumno de la escuela</h2>
                <img onLoad={()=>this.setState({ images: this.state.images + 1 }, ()=>this.badgeLoad = true)} src="assets/badgeSchool.jpg" style={{ position: 'absolute', top: 239, left: 420, width: 632, height: 140 }} />
                <BarCode value="eest45579177" style={{ position: 'absolute', left: 100, top: 480 }} />
            </div>
        </div>);
    }
};

export class Generate {
    constructor() {
        
    }
}

type IProps2 = {
    value: string;
    style?: React.CSSProperties;
};
const BarCode = (props: IProps2)=>{
    return(<div style={props.style}>
        <Barcode
            value={props.value}
            width={7.45}
            height={250}
            displayValue={false}
            background={'#FFFFFF'}
            lineColor={'#000000'}
            margin={4}
        />
    </div>);
};