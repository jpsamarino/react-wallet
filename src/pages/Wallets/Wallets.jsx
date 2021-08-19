import React, {  useState, useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideMenuWallet} from "../../components/Organism/AsideMenuWallet"
import { MainWallet } from "../../components/Organism/MainWallet"
import { WalletsToCustomize } from "../../components/Organism/WalletsToCustomize"
import { Loading } from'../../components/Atom/Loading'

import "./wallets.scss"
import{getAllWallets} from "./getDataWallets"

const Wallets = () =>{
    const [selectCodeWallet, setSelectCodeWallet ]= useState({codeWallet:null,type:null})
    const [summaryWallet, setSummaryWallet ]= useState(false)
    const typesWallets={
        wallets:"wallets",
        balanceWallets:"balanceWallets"
    }
 
    const handleSelectCodeWallet = (selectedCodeWallet) =>{
        setSelectCodeWallet({codeWallet:selectedCodeWallet,type:typesWallets.wallets})
    }

    const handleSelectCodeBalanceWallet = (selectedCodeWallet) =>{
        setSelectCodeWallet({codeWallet:selectedCodeWallet,type:typesWallets.balanceWallets})
    }
    
    const handleWalletData = (allWallets)=>{
        setSelectCodeWallet({codeWallet:allWallets.defaultWallet,type:typesWallets.wallets})
        setSummaryWallet(allWallets)
    }

    useEffect(()=>{
        (async () =>{
            const allWallets= await getAllWallets()
            handleWalletData(allWallets)
        })()
    },[])

    return (
        <div className="page-wallets">
            { summaryWallet? 
                <React.Fragment>
                    <ContainerAsidePanel>
                        <AsideMenuWallet 
                            summaryWallet={summaryWallet}
                            selectCodeWallet={selectCodeWallet.codeWallet}
                            handleSelectCodeWallet={handleSelectCodeWallet}
                            handleSelectCodeBalanceWallet={handleSelectCodeBalanceWallet}
                            />
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        {typesWallets.wallets===selectCodeWallet.type &&
                            <MainWallet summaryWallet={summaryWallet} selectCodeWallet={selectCodeWallet.codeWallet}/>
                        }    
                        {typesWallets.balanceWallets===selectCodeWallet.type &&     
                            <WalletsToCustomize selectCodeWallet={selectCodeWallet}/>
                        }
                    </ContainerMainPage>
                </React.Fragment>
                    :
                <Loading className="page-wallets__loading"/>
            }
        </div>
    )
}

export default Wallets