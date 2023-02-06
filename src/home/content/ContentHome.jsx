import React from 'react';
import { AiOutlineStar, AiOutlineLike, AiOutlineReload,  } from 'react-icons/ai';
import { IoSearchCircleOutline } from 'react-icons/io5'
import { AiTwotoneLike } from 'react-icons/ai'
const ContentHome = () => {
    return (
        <section className='contentHome'>
            <h1 className='contentHome-head'>Le meilleur choix des créatifs tels que vous</h1>
            <p className='contentHome-desc'>Que vous cherchiez des designs ou des photos, vous trouverez la ressource idéale sur Freepik.</p>


            <div className='contentFlex'>
                <div className='contentLeft'>
                    <div className='contentLeft-content'>
                        <i class='bx bx-star' ></i>
                        <div className='contentText'>
                            <h2>Contenu de stock de haute qualité</h2>
                            <p>Téléchargez des images accrocheuses de la meilleure qualité pour donner à votre projet la touche professionnelle nécessaire.</p>
                        </div>
                    </div>
                    <div className='contentLeft-content'>
                        
                        <i class='bx bx-like'></i>
                        <div className='contentText'>
                            <h2>Ressources prêtes à utiliser</h2>
                            <p>Accédez à des milliers d’images et de designs prêts à être publiés et terminez votre projet deux fois plus vite.</p>
                        </div>
                    </div>
                    <div className='contentLeft-content'>
                        <i class='bx bx-search'></i>
                        <div className='contentText'>
                            <h2>Résultats de recherche garantis</h2>
                            <p>Il existe une image et un style pour tous les projets, quels que soient vos besoins.</p>
                        </div>
                    </div>
                    <div className='contentLeft-content'>
                        <i class='bx bx-loader'></i>
                        <div className='contentText'>
                            <h2>Du nouveau contenu tous les jours</h2>
                            <p>Notre bibliothèque est mise à jour quotidiennement, pour que vous puissiez y trouver les photos et les designs les plus tendance et les plus récents.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="" />
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </div>
            </div>


            <div className="teams">
                <div className='teamsLeft'>
                    <h1 className="teamsLeft-title">
                        Rejoignez la communauté des dresseurs Pokemon
                    </h1>
                    <p className="teamsLeft-desc">
                        Derrière chaque image de stock se cache un esprit créatif. Vous pouvez également créer du contenu et le vendre sur Freepik.
                    </p>
                </div>
                <div className='teamsRight'></div>
            </div>
        </section>
    );
};

export default ContentHome;
