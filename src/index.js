import draw2d from 'packages'
module.exports = draw2d;


import raph from 'lib/raphael.exec.js'
import cl   from 'lib/Class.exec.js'
import path from 'lib/pathfinding.exec.js'


require('./util/OOHelper'); // secure replacement for eval("new " + string + "()")
require('./util/raphael_ext');
require('./util/Polyfill');
require('./util/Base64');
require('./util/Debug');
// require('./util/Color');

require('./util/ArrayList');
require('./util/SVGUtil');
//require('./util/JSONUtil');
//require('./util/UUID');
require('./util/spline/Spline');
require('./util/spline/CubicSpline');
require('./util/spline/CatmullRomSpline');
require('./util/spline/BezierSpline');
require('./geo/PositionConstants');
require('./geo/Point');
require('./geo/Rectangle');
require('./geo/Util');
require('./geo/Ray');
require('./geo/Line');
require('./command/CommandType');
require('./command/Command');
require('./command/CommandCollection');
require('./command/CommandStack');
require('./command/CommandStackEvent');
require('./command/CommandStackEventListener');
require('./command/CommandMove');
require('./command/CommandAttr');
require('./command/CommandMoveLine');
require('./command/CommandMoveConnection');
require('./command/CommandMoveVertex');
require('./command/CommandMoveVertices');
require('./command/CommandResize');
require('./command/CommandRotate');
require('./command/CommandConnect');
require('./command/CommandReconnect');
require('./command/CommandDelete');
require('./command/CommandDeleteGroup');
require('./command/CommandAdd');
require('./command/CommandGroup');
require('./command/CommandUngroup');
require('./command/CommandAddVertex');
require('./command/CommandAssignFigure');
require('./command/CommandBoundingBox');
require('./command/CommandRemoveVertex');
require('./command/CommandReplaceVertices');
require('./layout/connection/ConnectionRouter');
require('./layout/connection/DirectRouter');
require('./layout/connection/RubberbandRouter');
require('./layout/connection/VertexRouter');
require('./layout/connection/ManhattanConnectionRouter');
require('./layout/connection/ManhattanBridgedConnectionRouter');
require('./layout/connection/InteractiveManhattanConnectionRouter');
require('./layout/connection/CircuitConnectionRouter');
require('./layout/connection/SplineConnectionRouter');
require('./layout/connection/FanConnectionRouter');
require('./layout/connection/MazeConnectionRouter');
require('./layout/connection/MuteableManhattanConnectionRouter');
require('./layout/connection/SketchConnectionRouter');
require('./layout/mesh/MeshLayouter');
require('./layout/mesh/ExplodeLayouter');
require('./layout/mesh/ProposedMeshChange');
require('./layout/locator/Locator');
require('./layout/locator/PortLocator');
require('./layout/locator/DraggableLocator');
require('./layout/locator/SmartDraggableLocator');
require('./layout/locator/XYAbsPortLocator');
require('./layout/locator/XYRelPortLocator');
require('./layout/locator/InputPortLocator');
require('./layout/locator/OutputPortLocator');
require('./layout/locator/ConnectionLocator');
require('./layout/locator/ManhattanMidpointLocator');
require('./layout/locator/PolylineMidpointLocator');
require('./layout/locator/ParallelMidpointLocator');
require('./layout/locator/TopLocator');
require('./layout/locator/BottomLocator');
require('./layout/locator/LeftLocator');
require('./layout/locator/RightLocator');
require('./layout/locator/CenterLocator');
require('./policy/EditPolicy');
require('./policy/canvas/CanvasPolicy');
require('./policy/canvas/ZoomPolicy');
require('./policy/canvas/WheelZoomPolicy');
require('./policy/canvas/KeyboardPolicy');
require('./policy/canvas/DefaultKeyboardPolicy');
require('./policy/canvas/ExtendedKeyboardPolicy');
require('./policy/canvas/SelectionPolicy');
require('./policy/canvas/SingleSelectionPolicy');
require('./policy/canvas/GhostMoveSelectionPolicy');
require('./policy/canvas/PanningSelectionPolicy');
require('./policy/canvas/BoundingboxSelectionPolicy');
require('./policy/canvas/ReadOnlySelectionPolicy');
require('./policy/canvas/DecorationPolicy');
require('./policy/canvas/FadeoutDecorationPolicy');
require('./policy/canvas/CoronaDecorationPolicy');
require('./policy/canvas/SnapToEditPolicy');
require('./policy/canvas/ShowDimetricGridEditPolicy');
require('./policy/canvas/SnapToDimetricGridEditPolicy');
require('./policy/canvas/ShowGridEditPolicy');
require('./policy/canvas/SnapToGridEditPolicy');
require('./policy/canvas/ShowDotEditPolicy');
require('./policy/canvas/ShowChessboardEditPolicy');
require('./policy/canvas/SnapToGeometryEditPolicy');
require('./policy/canvas/SnapToVerticesEditPolicy');
require('./policy/canvas/SnapToInBetweenEditPolicy');
require('./policy/canvas/SnapToCenterEditPolicy');
require('./policy/canvas/DropInterceptorPolicy');
require('./policy/connection/ConnectionCreatePolicy');
require('./policy/connection/ComposedConnectionCreatePolicy');
require('./policy/connection/ClickConnectionCreatePolicy');
require('./policy/connection/OrthogonalConnectionCreatePolicy');
require('./policy/connection/DragConnectionCreatePolicy');
require('./policy/figure/FigureEditPolicy');
require('./policy/figure/DragDropEditPolicy');
require('./policy/figure/RegionEditPolicy');
require('./policy/figure/HorizontalEditPolicy');
require('./policy/figure/VerticalEditPolicy');
require('./policy/figure/SelectionPolicy');
require('./policy/figure/SelectionFeedbackPolicy');
require('./policy/figure/ResizeSelectionFeedbackPolicy');
require('./policy/figure/RectangleSelectionFeedbackPolicy');
require('./policy/figure/BigRectangleSelectionFeedbackPolicy');
require('./policy/figure/RoundRectangleSelectionFeedbackPolicy');
require('./policy/figure/BusSelectionFeedbackPolicy');
require('./policy/figure/WidthSelectionFeedbackPolicy');
require('./policy/figure/VBusSelectionFeedbackPolicy');
require('./policy/figure/HBusSelectionFeedbackPolicy');
require('./policy/figure/AntSelectionFeedbackPolicy');
require('./policy/figure/GlowSelectionFeedbackPolicy');
require('./policy/figure/SlimSelectionFeedbackPolicy');
require('./policy/figure/VertexSelectionFeedbackPolicy');
require('./policy/line/LineSelectionFeedbackPolicy');
require('./policy/line/VertexSelectionFeedbackPolicy');
require('./policy/line/OrthogonalSelectionFeedbackPolicy');
require('./policy/port/PortFeedbackPolicy');
require('./policy/port/ElasticStrapFeedbackPolicy');
require('./policy/port/IntrusivePortsFeedbackPolicy');
require('./Configuration');
require('./HeadlessCanvas');
require('./Canvas');
require('./Selection');
require('./Figure');
require('./shape/node/Node');
require('./VectorFigure');
require('./shape/basic/Rectangle');
require('./SetFigure');
require('./SVGFigure');
require('./shape/node/Hub');
require('./shape/node/HorizontalBus');
require('./shape/node/VerticalBus');
require('./shape/node/Fulcrum');
require('./shape/basic/Arc');
require('./shape/basic/Oval');
require('./shape/basic/Circle');
require('./shape/basic/Label');
require('./shape/basic/Text');
require('./shape/basic/Line');
require('./shape/basic/PolyLine');
require('./shape/basic/Image');
require('./shape/basic/Polygon');
require('./shape/basic/Diamond');
require('./shape/dimetric/Rectangle');
require('./shape/composite/Composite');
require('./shape/composite/StrongComposite');
require('./shape/composite/Group');
require('./shape/composite/Jailhouse');
require('./shape/composite/WeakComposite');
require('./shape/composite/Raft');
require('./Connection');
require('./VectorFigure');
require('./ResizeHandle');
require('./shape/basic/LineResizeHandle');
require('./shape/basic/LineStartResizeHandle');
require('./shape/basic/LineEndResizeHandle');
require('./shape/basic/VertexResizeHandle');
require('./shape/basic/GhostVertexResizeHandle');
require('./Port');
require('./InputPort');
require('./OutputPort');
require('./HybridPort');
require('./layout/anchor/ConnectionAnchor');
require('./layout/anchor/ChopboxConnectionAnchor');
require('./layout/anchor/FanConnectionAnchor');
require('./layout/anchor/ShortesPathConnectionAnchor');
require('./layout/anchor/CenterEdgeConnectionAnchor');
require('./shape/arrow/CalligrapherArrowLeft');
require('./shape/arrow/CalligrapherArrowDownLeft');
require('./shape/node/Start');
require('./shape/node/End');
require('./shape/node/Between');
require('./shape/note/PostIt');
require('./shape/flowchart/Document');
require('./shape/widget/Widget');
require('./shape/widget/Slider');
require('./shape/diagram/Diagram');
require('./shape/diagram/Pie');
require('./shape/diagram/Sparkline');
require('./shape/analog/OpAmp');
require('./shape/analog/ResistorBridge');
require('./shape/analog/ResistorVertical');
require('./shape/analog/VoltageSupplyHorizontal');
require('./shape/analog/VoltageSupplyVertical');
require('./shape/chem/HeatExchanger');
require('./shape/chem/Mixer');
require('./shape/chem/Pump');
require('./shape/chem/Valve');
require('./shape/layout/Layout');
require('./shape/layout/HorizontalLayout');
require('./shape/layout/VerticalLayout');
require('./shape/layout/TableLayout');
require('./shape/layout/FlexGridLayout');
require('./shape/layout/StackLayout');
require('./shape/icon/Icon');
require('./shape/icon/Thunder');
require('./shape/icon/Snow');
require('./shape/icon/Hail');
require('./shape/icon/Rain');
require('./shape/icon/Cloudy');
require('./shape/icon/Sun');
require('./shape/icon/Undo');
require('./shape/icon/Detour');
require('./shape/icon/Merge');
require('./shape/icon/Split');
require('./shape/icon/Fork');
require('./shape/icon/ForkAlt');
require('./shape/icon/Exchange');
require('./shape/icon/Shuffle');
require('./shape/icon/Refresh');
require('./shape/icon/Ccw');
require('./shape/icon/Acw');
require('./shape/icon/Contract');
require('./shape/icon/Expand');
require('./shape/icon/Stop');
require('./shape/icon/End');
require('./shape/icon/Start');
require('./shape/icon/Ff');
require('./shape/icon/Rw');
require('./shape/icon/ArrowRight');
require('./shape/icon/ArrowLeft');
require('./shape/icon/ArrowUp');
require('./shape/icon/ArrowDown');
require('./shape/icon/ArrowLeft2');
require('./shape/icon/ArrowRight2');
require('./shape/icon/Smile2');
require('./shape/icon/Smile');
require('./shape/icon/Alarm');
require('./shape/icon/Clock');
require('./shape/icon/StopWatch');
require('./shape/icon/History');
require('./shape/icon/Future');
require('./shape/icon/GlobeAlt2');
require('./shape/icon/GlobeAlt');
require('./shape/icon/Globe');
require('./shape/icon/Warning');
require('./shape/icon/Code');
require('./shape/icon/Pensil');
require('./shape/icon/Pen');
require('./shape/icon/Plus');
require('./shape/icon/Minus');
require('./shape/icon/TShirt');
require('./shape/icon/Sticker');
require('./shape/icon/Page2');
require('./shape/icon/Page');
require('./shape/icon/Landscape1');
require('./shape/icon/Landscape2');
require('./shape/icon/Plugin');
require('./shape/icon/Bookmark');
require('./shape/icon/Hammer');
require('./shape/icon/Users');
require('./shape/icon/User');
require('./shape/icon/Customer');
require('./shape/icon/Employee');
require('./shape/icon/Anonymous');
require('./shape/icon/Skull');
require('./shape/icon/Mail');
require('./shape/icon/Picture');
require('./shape/icon/Bubble');
require('./shape/icon/CodeTalk');
require('./shape/icon/Talkq');
require('./shape/icon/Talke');
require('./shape/icon/Home');
require('./shape/icon/Lock');
require('./shape/icon/Clip');
require('./shape/icon/Star');
require('./shape/icon/StarOff');
require('./shape/icon/Star2');
require('./shape/icon/Star2Off');
require('./shape/icon/Star3');
require('./shape/icon/Star3Off');
require('./shape/icon/Chat');
require('./shape/icon/Quote');
require('./shape/icon/Gear2');
require('./shape/icon/Gear');
require('./shape/icon/Wrench');
require('./shape/icon/Wrench2');
require('./shape/icon/Wrench3');
require('./shape/icon/ScrewDriver');
require('./shape/icon/HammerAndScrewDriver');
require('./shape/icon/Magic');
require('./shape/icon/Download');
require('./shape/icon/View');
require('./shape/icon/Noview');
require('./shape/icon/Cloud');
require('./shape/icon/Cloud2');
require('./shape/icon/CloudDown');
require('./shape/icon/CloudUp');
require('./shape/icon/Location');
require('./shape/icon/Volume0');
require('./shape/icon/Volume1');
require('./shape/icon/Volume2');
require('./shape/icon/Volume3');
require('./shape/icon/Key');
require('./shape/icon/Ruler');
require('./shape/icon/Power');
require('./shape/icon/Unlock');
require('./shape/icon/Flag');
require('./shape/icon/Tag');
require('./shape/icon/Search');
require('./shape/icon/ZoomOut');
require('./shape/icon/ZoomIn');
require('./shape/icon/Cross');
require('./shape/icon/Check');
require('./shape/icon/Settings');
require('./shape/icon/SettingsAlt');
require('./shape/icon/Feed');
require('./shape/icon/Bug');
require('./shape/icon/Link');
require('./shape/icon/Calendar');
require('./shape/icon/Picker');
require('./shape/icon/No');
require('./shape/icon/CommandLine');
require('./shape/icon/Photo');
require('./shape/icon/Printer');
require('./shape/icon/Export');
require('./shape/icon/Import');
require('./shape/icon/Run');
require('./shape/icon/Magnet');
require('./shape/icon/NoMagnet');
require('./shape/icon/ReflectH');
require('./shape/icon/ReflectV');
require('./shape/icon/Resize2');
require('./shape/icon/Rotate');
require('./shape/icon/Connect');
require('./shape/icon/Disconnect');
require('./shape/icon/Folder');
require('./shape/icon/Man');
require('./shape/icon/Woman');
require('./shape/icon/People');
require('./shape/icon/Parent');
require('./shape/icon/Notebook');
require('./shape/icon/Diagram');
require('./shape/icon/BarChart');
require('./shape/icon/PieChart');
require('./shape/icon/LineChart');
require('./shape/icon/Apps');
require('./shape/icon/Locked');
require('./shape/icon/Ppt');
require('./shape/icon/Lab');
require('./shape/icon/Umbrella');
require('./shape/icon/Dry');
require('./shape/icon/Ipad');
require('./shape/icon/Iphone');
require('./shape/icon/Jigsaw');
require('./shape/icon/Lamp');
require('./shape/icon/Lamp_alt');
require('./shape/icon/Video');
require('./shape/icon/Palm');
require('./shape/icon/Fave');
require('./shape/icon/Help');
require('./shape/icon/Crop');
require('./shape/icon/BioHazard');
require('./shape/icon/WheelChair');
require('./shape/icon/Mic');
require('./shape/icon/MicMute');
require('./shape/icon/IMac');
require('./shape/icon/Pc');
require('./shape/icon/Cube');
require('./shape/icon/FullCube');
require('./shape/icon/Font');
require('./shape/icon/Trash');
require('./shape/icon/NewWindow');
require('./shape/icon/DockRight');
require('./shape/icon/DockLeft');
require('./shape/icon/DockBottom');
require('./shape/icon/DockTop');
require('./shape/icon/Pallete');
require('./shape/icon/Cart');
require('./shape/icon/Glasses');
require('./shape/icon/Package');
require('./shape/icon/Book');
require('./shape/icon/Books');
require('./shape/icon/Icons');
require('./shape/icon/List');
require('./shape/icon/Db');
require('./shape/icon/Paper');
require('./shape/icon/TakeOff');
require('./shape/icon/Landing');
require('./shape/icon/Plane');
require('./shape/icon/Phone');
require('./shape/icon/HangUp');
require('./shape/icon/SlideShare');
require('./shape/icon/Twitter');
require('./shape/icon/TwitterBird');
require('./shape/icon/Skype');
require('./shape/icon/Windows');
require('./shape/icon/Apple');
require('./shape/icon/Linux');
require('./shape/icon/NodeJs');
require('./shape/icon/JQuery');
require('./shape/icon/Sencha');
require('./shape/icon/Vim');
require('./shape/icon/InkScape');
require('./shape/icon/Aumade');
require('./shape/icon/Firefox');
require('./shape/icon/Ie');
require('./shape/icon/Ie9');
require('./shape/icon/Opera');
require('./shape/icon/Chrome');
require('./shape/icon/Safari');
require('./shape/icon/LinkedIn');
require('./shape/icon/Flickr');
require('./shape/icon/GitHub');
require('./shape/icon/GitHubAlt');
require('./shape/icon/Raphael');
require('./shape/icon/GRaphael');
require('./shape/icon/Svg');
require('./shape/icon/Usb');
require('./shape/icon/Ethernet');
require('./shape/pert/Activity');
require('./shape/pert/Start');
require('./shape/state/Start');
require('./shape/state/End');
require('./shape/state/State');
require('./shape/state/Connection');
require('./ui/LabelEditor');
require('./ui/LabelInplaceEditor');
require('./decoration/connection/Decorator');
require('./decoration/connection/ArrowDecorator');
require('./decoration/connection/DiamondDecorator');
require('./decoration/connection/CircleDecorator');
require('./decoration/connection/BarDecorator');
require('./io/Reader');
require('./io/Writer');
require('./io/svg/Writer');
require('./io/png/Writer');
require('./io/json/Writer');
require('./io/json/Reader');
