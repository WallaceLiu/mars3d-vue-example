define(["./Matrix2-1ba2543c","./RuntimeError-ac440aa5","./defaultValue-69ee94f4","./EllipseGeometry-3718e431","./VertexFormat-e68722dd","./ComponentDatatype-07fbb0d4","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-3afcc791","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./EllipseGeometryLibrary-7d9d8578","./GeometryAttribute-ad6fe63d","./GeometryAttributes-1b4134a9","./GeometryInstance-5555f2e4","./GeometryPipeline-58ed3258","./AttributeCompression-4c4a8822","./EncodedCartesian3-8da855cc","./IndexDatatype-0b020dfb","./IntersectionTests-c9a542c8","./Plane-faef0199"],(function(e,t,i,r,o,n,s,a,l,d,m,c,u,p,y,_,G,x,f,h,g){"use strict";function E(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}E.packedLength=r.EllipseGeometry.packedLength,E.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};const w=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),A={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(t,n,s){const a=r.EllipseGeometry.unpack(t,n,w);return A.center=e.Cartesian3.clone(a._center,A.center),A.ellipsoid=e.Ellipsoid.clone(a._ellipsoid,A.ellipsoid),A.height=a._height,A.extrudedHeight=a._extrudedHeight,A.granularity=a._granularity,A.vertexFormat=o.VertexFormat.clone(a._vertexFormat,A.vertexFormat),A.stRotation=a._stRotation,A.shadowVolume=a._shadowVolume,i.defined(s)?(A.semiMajorAxis=a._semiMajorAxis,A.semiMinorAxis=a._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(A),s):(A.radius=a._semiMajorAxis,new E(A))},E.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,s=t(r,n),a=i(r,n);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:a,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=E.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),E.createGeometry(t)}}));
