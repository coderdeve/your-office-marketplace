import React, {useState} from "react";
import Project1 from "../images/project-1.jpg";

function ProjectPage(props){

    const [Project, setProject] = useState(
        {
            ID: 1,
            title: "تجهيز و تهيئة سيرفرات سحابية على امازون",
            about: "هل تبحث عن خبير لإعداد الخدمات أو حل أي مشكلات في Amazon Web Services (AWS)؟ أنا هنا لمساعدتك</br>أنا مهندس مطور معتمد من AWS وأتمتع بمعرفة وخبرة في الحفاظ على الحلول القائمة على AWS</br>فيما يلي الأشياء التي اكتسبت معرفتها وعملت عليها من خلال مساعدة عملائي:</br>VPC, VPN, S3, ECS, EKS, EC2, RDS, EBS, ELB, API, Auto Scalling</br>Elastic beanstalk, Route53, Lambda, DynamoDB</br>Elasticsearch strong experience in designing HA, IAM, Direct Connect</br>Scalable & fault tolerant system in AWS</br>إلى جانب هذا أنا بارع في:</br>Ansible, Bitbucket, EKS, K8s, Jenkins, ECS, Fargate</br>إلى جانب ذلك ، أقدم لعملائي خطة فعالة من حيث التكلفة لتلبية احتياجاتهم مع إنفاق أقل.",
            freelancer: {
                ID: 1,
                name: "ياسر غلام",
                username: "@ValorYasir",
                dp: "http://placeimg.com/100/100/people?freelancer-" + 1,
            },
            duration: "3 ايام",
            poster: Project1,

            videos: [
                {
                    ID: 1,
                    title: "التخطيط بعد آخذ المتطلبات",
                    duration: "1 يوم",
                },
                {
                    ID: 2,
                    title: "تطبيق التخطيط على امازون",
                    duration: "1 يوم",
                },
                {
                    ID: 3,
                    title: "الاختبار و التسليم",
                    duration: "1 يوم",
                }
            ]
        }
    );

    const projectID = props.match.params.projectid;

    var projectVideos = [];
    for(let i = 0; i < Project.videos.length; i++){
        projectVideos.push(
            <a href="#" key={"project-video-" + i} className="no_ul aic rel flex">
                <div className="id fonts18 fontn colorfff">{Project.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="fonts15 label fontb color333">{Project.videos[i].title}</h1>
                    <h1 className="fonts13 duration fontn color777">{Project.videos[i].duration}</h1>
                </div>
            </a>
        );
    }


    return (
        <div className="project-page rel flex">

            <div className="project-info rel">

                <div className="freelancer rel aic flex">
                    <div className="pic">
                        <img src={Project.freelancer.dp} className="block" />
                    </div>
                    <div className="meta rel">
                        <h2 className="fonts15 name fontb color333">{Project.freelancer.name}</h2>
                        <h2 className="fonts13 username fontn color777">منفذ المشروع</h2>
                    </div>
                </div>

                <div className="project-meta">
                    <h2 className="fonts24 title fontb color333">{Project.title}</h2>
                    <p className="fonts18 about fontb color777" dangerouslySetInnerHTML={{__html: Project.about}} />

                    <div className="section section-b rel">
                        <h2 className="title fonts24 fontb">انجازات <span className="fontn">منفذ المشروع</span></h2>
                        <div className="project-stats aic flex">
                            <div className="stats-box flex">
                                <div className="ico ico-shield fonts24 icon-shield1" />
                                <h2 className="value fonts15 color333">18</h2>
                                <h2 className="label fonts13 color777">المشاريع المنجزة</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery fonts24 icon-battery-3" />
                                <h2 className="value fonts15 color333">93.3%</h2>
                                <h2 className="label fonts13 color777">مشاريع قيد التنفيذ</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico icon-flag fonts24 icon-flag" />
                                <h2 className="value fonts15 color333">متوسط</h2>
                                <h2 className="label fonts13 color777">المستوى</h2>
                            </div>
                        </div>
                    </div>

                    <div className="section section-b rel">
                        <h2 className="title fonts24 fontb">تفاصيل <span className="fontn">المشروع</span></h2>
                        <div className="project-videos aic flex">
                            {projectVideos}
                        </div>
                    </div>

                </div>
                
            </div>

            <div className="project-preview rel">

                <div className="player rel">
                    <video poster={Project.poster} />
                    <div className="control abs aic flex">
                        <button className="icon-pause fonts18 pb" />
                        <div className="timer rel fontn fonts18 colorfff">
                            02:54 / 09:55
                        </div>
                        <div className="slider rel">
                            <div className="progress rel">
                                <div className="bar rel">
                                    <div className="knob abs" />
                                </div>
                            </div>
                        </div>
                        <button className="icon-volume-high fonts18 vol" />
                        <button className="icon-enlarge fonts18 fulls" />
                    </div>
                </div>

                <div className="extra-block rel flex">

                    <div className="chat rel">
                        <div className="section section-b rel">
                            <h2 className="title fonts24 fontb">محادثة <span className="fontn">سريعة</span></h2>
                            <div className="messages aic flex">
                                <div className="bubble rel">
                                    <h2 className="text iblock fontn fonts15 color333">مرحبا ، انا سالم محمد</h2>
                                </div>
                                <div className="bubble rel">
                                    <h2 className="text iblock fontn fonts15 color333">حابب اضيف تعديل على المشروع</h2>
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="text iblock fontn fonts15 color333">اهلا استاذ سالم </h2>
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="text iblock fontn fonts15 color333">و لا يهمك في خدمتك دائما ، ارفع طلب بالتعديل</h2>
                                </div>
                                <div className="bubble bubble-send rel">
                                    <input className="text iblock fontn fonts15 color333" type="text" placeholder="اكتب رسالتك هنا..." />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="online-clients rel">
                        <div className="tooltip abs fonts13 fontb colorfff">4 متواجدون الآن</div>
                        <div className="section section-b rel">
                            <h2 className="title fonts24 fontb">عملاء <span className="fontn">اونلاين</span></h2>
                            <div className="clients-list rel">
                                <div className="client rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?clients-1" className="block" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="fonts15 name fontb color333">صالح عبد الله</h2>
                                        <h2 className="fonts13 username fontn color777">@salehA</h2>
                                    </div>
                                </div>
                                <div className="client rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?clients-2" className="block" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="fonts15 name fontb color333">سالم محمد</h2>
                                        <h2 className="fonts13 username fontn color777">@Saloom</h2>
                                    </div>
                                </div>
                                <div className="client rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?clients-3" className="block" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="fonts15 name fontb color333">محمد الزيلعي</h2>
                                        <h2 className="fonts13 username fontn color777">@zoozM</h2>
                                    </div>
                                </div>
                                <div className="client rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?clients-4" className="block" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="fonts15 name fontb color333">ابرار سعيد</h2>
                                        <h2 className="fonts13 username fontn color777">@Abrar_S</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProjectPage;